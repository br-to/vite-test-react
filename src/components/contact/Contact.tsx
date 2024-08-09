const Contact = () => {
  return (
    <div>
      <h1>お問い合わせ</h1>
      <p>全て入力してください</p>

      <form action="">
        <div>
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            id="name"
            placeholder="フルネーム"
            value="test br-to"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="email">E mail</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="questions">お問い合わせ内容</label>
          <select id="questions">
            <option value="">お問い合わせ内容を選択してください。</option>
            <option value="dev">開発案件のご相談</option>
            <option value="video">撮影のご相談</option>
            <option value="sns-marketing">SNSマーケティングのご相談</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />
            利用規約に同意します
          </label>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default Contact;
