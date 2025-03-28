const categories = [
  {
    name: 'React',
    link: './react',
    count: 1,
  },
  {
    name: 'Next.js',
    link: './next',
    count: 2,
  }
]

const anki = [
  {
    title: "JavaScript において、内部関数が外部関数の変数を参照し続ける仕組みを何という？",
    answer: "クロージャ（Closure）",
  },
  {
    title: "アルゴリズムの時間計算量や空間計算量を表す記法は？",
    answer: "Big-O 記法"
  },
  {
    title: "「オブジェクトの状態を変更せず、新しいオブジェクトを生成する設計思想」を何という？",
    answer: "イミュータブル（Immutable）"
  },
  {
    title: "REST API と SOAP API の主な違いは？",
    answer: "REST は軽量で HTTP メソッドを活用するが、SOAP は XML ベースでより厳密なプロトコルを持つ。"
  },
  {
    title: "JavaScript で非同期処理を扱う 3 つの方法は？",
    answer: "コールバック、Promise、async/await"
  },
  {
    title: "SOLID 原則の 5 つの要素は？",
    answer: "単一責任（S）、開放閉鎖（O）、リスコフの置換（L）、インターフェース分離（I）、依存性逆転（D）"
  },
  {
    title: "メモリ管理において、不要になったオブジェクトを自動的に解放する仕組みを何という？",
    answer: "ガベージコレクション（Garbage Collection）"
  },
  {
    title: "SQL でテーブルを結合する 4つの主要な JOIN の種類は？",
    answer: "INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN"
  }
]

export { categories, anki };
