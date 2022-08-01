class pick_your_trial_plan{
    //https://github.com/topics

    get Enterprise_cloud(){return $('[class="position-absolute left-0 right-0 h5 text-center text-uppercase color-fg-on-emphasis js-recommended-plan-caption"]')}
    Enterprise_cloud_click(){this.Enterprise_cloud.click()}

    get Enterprise_server(){return $('[class="rounded-3 px-2 pt-5 pb-2"]')}
    Enterprise_server_click(){this.Enterprise_server.click()}  

}

module.exports = new pick_your_trial_plan()