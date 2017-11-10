use threads;
db.dropDatabase()
db.threads.insert(
  {
    name: "Dan",
    title: "Do we have free will?",
    comment: "We think we have free will, but do we?? It seems like the libertarian notion of free will is incompatible with scientific physicalism. Discuss please!!!",
    children: [
      {
        name: "Margaret",
        comment: "Yeah we defs have free will haha physicalism is a lie!!",
        children: [
          {
            name: "Frank",
            comment: "Nah Margaret ur so wrong! Physicalism is the only theory consistent with modern science. So we can't have free will.",
            children: []
          },
          {
            name: "Jane",
            comment: "I agree with Margaret",
            children: []
          }
        ],
        name: "Jonathan",
        comment: "I think we should all just chill out and be compatibilists. You never know!",
        children: []
      }
    ]
  }
)
