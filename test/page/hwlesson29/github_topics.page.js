class github_topics{
    //https://github.com/topics

    get topics(){return $('//h1[contains(text(),"Topics")]')}
    isDispaleyed_topics(){this.topics.isDisplayed()}

}

module.exports = new github_topics()