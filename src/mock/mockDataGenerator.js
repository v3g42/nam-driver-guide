/* eslint-disable */
const moment = require('moment')
const fs = require('fs')
;(function() {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
  }

  const author = [
    'David Beckham',
    'Hernan Crespo',
    'Cristiano Ronaldo',
    'Alexis Sanchez',
    'Minamoto Mushashi',
    'Lionel Messi',
    'Paolo Mandini',
    'Luis Nani',
    'Carlos Tevez',
    'Wayner Rooney',
    'Barack Obama',
    'Donald Trump',
    'Theo Walcott',
    'Marilyn Monroe',
    'Abraham Lincoln',
    'Mother Teresa',
    'John F. Kennedy',
    'Nelson Mandela',
    'Bill Gates',
    'Muhammad Ali',
    'Mahatma Gandhi',
    'Margaret Thatcher',
    'Charles de Gaulle',
    'Christopher Columbus',
    'George Orwell',
    'Charles Darwin',
    'Elvis Presley',
    'Albert Einstein',
  ]

  const content = [
    'Israel is willing to consider alternatives to controversial metal detectors it installed at a holy site in Jerusalem, a senior official says.Major General Yoav Mordechai called on the Muslim world to put forward other suggestions',
    '"We hope that Jordan and other Arab nations can suggest another security solution for this (problem)," Maj-Gen Mordechai told BBC Arabic, referring to the metal detectors.',
    '"Any solution be it electronic, cyber or modern technology: Israel is ready for a solution. We need a security solution; not political or religious."',
    "The BBC World Service's Middle East editor Alan Johnston says it is the first sign of a softening of Israel's position over the measures.",
    "Saturday saw fresh clashes between Palestinians and Israeli security forces. At least four Palestinians have been killed in the last two day's protests.",
    'The United Nations Security Council is to meet on Monday to discuss ways of defusing the violence.',
    'Major General Yoav Mordechai called on the Muslim world to put forward other suggestions.',
    'Bank of America has chosen Dublin as its new base to service EU clients as part of its Brexit contingency plans.',
    'It is the first US bank to confirm the Irish capital as its preferred site.',
    'Many banks intend to set up subsidiaries in Europe so they can continue to look after EU customers if their UK-based operations lose the ability to operate across the bloc following Brexit.',
    '"We already have a fully licensed and operational Irish-domiciled bank which, combined with Ireland\'s strong commitment to business and economic growth, makes Dublin the natural location to consolidate our legal entities as we transition."',
    'He added: "While we await further clarity around the Brexit negotiations, we are making all necessary preparations to serve our clients however those discussions conclude."',
    'Leo Varadkar, Ireland\'s Taoiseach who met Mr Moynihan on Friday, said: "Bank of America has a long-standing commitment to Ireland and I look forward to this relationship growing and deepening in the years ahead."',
    'He said the announcement was "a strong endorsement of Ireland\'s attractiveness as a location for investment".',
    'Requesting payment for buy iPhone',
    'A £14bn class action lawsuit against Mastercard has been thrown out by the Competition Appeals Tribunal.',
    "Requesting payment for buy pet's food",
    'The tribunal found that even if a loss had been suffered, and could be estimated across the whole class, there was no way any individual could receive compensation equal to the loss that he or she had actually suffered.',
    'Requesting payment for take a picture with famous actor',
    'The case was filed in September 2016, and followed a European Court of Justice (ECJ) ruling against the level of so-called interchange fees - the amounts that retailers have to pay on debit and credit cards.',
    '"We welcome the Competition Appeal Tribunal\'s judgment refusing certification for the proposed collective action," said a spokesperson for Mastercard.',
    'Requesting payment for go to the mall',
    'Requesting payment for go to the park',
    'Requesting payment for go to the musium',
    'Requesting payment for go to the stadium',
    'Requesting payment for go to hometown',
    'Requesting payment for eat iscream',
    'Requesting payment for eat pizza',
    'Requesting payment for drink beer',
    'Requesting payment for orange juice',
    'Requesting payment for lemon juice',
  ]

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  const results = []

  const name = {}

  for (let ii = 0; ii < 5; ii++) {
    const item = {}

    item.createdAt = randomDate(new Date(2017, 5, 1), new Date())

    item.content = content[getRandomInt(0, content.length)]
    item.author = author[getRandomInt(0, author.length)]
    item.hits = getRandomInt(100, 10000)

    results.push(item)

    const val = author[getRandomInt(0, author.length)]
    name[val] = { text: val }
  }

  const resultJSON = JSON.stringify(results)

  fs.writeFile('news.json', resultJSON, 'utf8')
  fs.writeFile('name.json', JSON.stringify(name), 'utf8')

  console.log(`Generated ${results.length} items`)
})()
/* eslint-enable */
