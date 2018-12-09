

let TitleLink = new Scrape({
    where: '.class > thing', 
    what: 'href', 
    when: elem => elem.coontent() == 'thing',
    how: content => content.strip()
}

let Titles = new ScrapeList({
    howMany: '1',
    where: '.class > thing', 
    what: 'href', 
    when: elem => elem.coontent() == 'thing',
    how: content => content.strip()
}

const model = {
    title: new Scrape('.class', 'content'),
    link: TitleLink
}



data = scrape('instagram.com', model)