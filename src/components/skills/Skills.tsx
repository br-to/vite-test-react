import { useState, useEffect } from 'react';

type Props = {
  skills: string[];
};
const Skills = ({ skills }: Props) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 500);
  }, []);

  return (
    <div>
      <p>skills</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLogin ? (
        <button onClick={() => setIsLogin(false)} type="button">
          ログアウト
        </button>
      ) : (
        <button type="button" onClick={() => setIsLogin(true)}>
          ログイン
        </button>
      )}
    </div>
  );
};

export default Skills;
