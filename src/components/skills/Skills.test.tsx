import { logRoles, render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('render a list of item', () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(skills.length);
  });

  test('render login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'ログイン',
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('not render logout button', () => {
    render(<Skills skills={skills} />);
    const logoutButton = screen.queryByRole('button', {
      name: 'ログアウト',
    });
    expect(logoutButton).not.toBeInTheDocument();
  });

  test('logout button is eventually rendered', async () => {
    render(<Skills skills={skills} />);
    // logRoles(view.container);
    // screen.debug();
    const logoutButton = await screen.findByRole(
      'button',
      {
        name: 'ログアウト',
      },
      {
        timeout: 1000,
      }
    );
    // screen.debug();
    expect(logoutButton).toBeInTheDocument();
  });
});
