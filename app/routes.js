//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/workplace', function(request, response) {

    var workplace = request.session.data['workplace']
    if (workplace === "Dinnington Academy"){
        response.redirect("/prototype-v-2/secondary-profile/about")
    } else if (workplace === "Oak primary school"){
        response.redirect("/prototype-v-2/primary-profile/about")
    } else {
        response.redirect("/")
    }
})

router.get('/prototype-v-1/academic-performance/attainment-v-3', function (req, res) {

    const subject = req.query.subject || '8-best'
    const characteristic = req.query.characteristic || 'all'

    res.render('/prototype-v-1/academic-performance/attainment-v-3', {
        subject,
        characteristic
    })
})
