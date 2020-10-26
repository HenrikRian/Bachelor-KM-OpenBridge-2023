import * as fs from 'fs';

function parse(name: string) {
  const file = fs.readFileSync(name, 'utf-8')
  const fileMedium = file.replace(/Large/g, 'Medium')
    .replace(/large/g, 'medium')
    .replace(/\d+\.*\d*/g, substring => (parseFloat(substring) / 2).toString())


  const mediumName = name.replace('large', 'medium')
  fs.writeFileSync(mediumName, fileMedium)

  const fileSmall = fileMedium.replace(/Medium/g, 'Small')
    .replace(/medium/g, 'small')
    .replace(/\d+\.*\d*/g, substring => (substring === '.' ? '.' : parseFloat(substring) / 4).toString())

    .replace('showLabels', 'showArrow')
    .replace(/\n.*secondaryTickMarks: .+,/, '')

  const smallName = name.replace('large', 'small')
  fs.writeFileSync(smallName, fileSmall)
}

function parseStories(name: string) {
  const file = fs.readFileSync(name, 'utf-8')
  const fileMedium = file.replace(/Large/g, 'Medium')
    .replace(/large/g, 'medium')
    .replace(/512/g, '256')

  const mediumName = name.replace('large', 'medium')
  fs.writeFileSync(mediumName, fileMedium)

  const fileSmall = fileMedium.replace(/Medium/g, 'Small')
    .replace(/medium/g, 'small')
    .replace(/256/g, '64')

  const smallName = name.replace('large', 'small')
  fs.writeFileSync(smallName, fileSmall)
}

const name = process.argv[2]
parse(name)
parseStories(name.replace('ts', 'stories.jsx'))
