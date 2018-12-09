

let TitleLink = new ScrapeMany({
    where: '.class > thing', 
    what: 'href', 
    when: elem => elem.coontent() == 'thing',
    how: content => content.strip()
}

let Title = new ScrapeMany({
    where: '.class > thing', 
    what: 'href', 
    onlyWhen: elem => elem.coontent() == 'thing',
    how: content => content.strip()
}

let Page = new ScrapeOne({
    selector: '.class', 
    attribute: 'content', 
    transform: content => content.strip(),
    onlyIf: elem => elem.coontent() == 'thing',
    childOf: Title,
    parentOf: Thing,
}

const model = {
    titles: [Title],
    links: [TitleLink],
    page: Page
}



data = scrape('instagram.com', model)