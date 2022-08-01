class github_explore{
    //https://github.com/explore

    get topics_button(){return $('[data-selected-links="topics_path /topics/ /topics"]')}
    click_topics(){this.topics_button.click()}

}

module.exports = new github_explore()