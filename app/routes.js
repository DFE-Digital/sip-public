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

router.get('/english-maths-all-pupils', function (req, res) {

  const allPupilsGrade = req.query.allPupilsGrade || "grade-5"
  const characteristicGrade = req.query.characteristicGrade || "grade-5"
  const characteristic = req.query.characteristic || "disadvantaged"

  res.render('prototype-v-1/academic-performance/english-maths-results', {
    allPupilsGrade,
    characteristicGrade,
    characteristic
  })

})

router.get('/english-maths-pupil-characteristic', function (req, res) {

  const allPupilsGrade = req.query.allPupilsGrade || "grade-5"
  const characteristicGrade = req.query.characteristicGrade || "grade-5"
  const characteristic = req.query.characteristic || "disadvantaged"

  res.render('prototype-v-1/academic-performance/english-maths-results', {
    allPupilsGrade,
    characteristicGrade,
    characteristic
  })

})

router.get('/pupil-characteristic', function (req, res) {

    const characteristic = req.query.characteristic || "all"
    const subject = req.query.subject || "english"

    res.render('prototype-v-1/academic-performance/attainment/attainment-versions/attainment', {
        characteristic,
        subject
    })

})

router.get('/subject-breakdown', function (req, res) {

    const subject = req.query.subject || "english"
    const characteristic = req.query.characteristic || "all"

    res.render('prototype-v-1/academic-performance/attainment/attainment-versions/attainment', {
        subject,
        characteristic
    })

})

router.get('/prototype-v-1/academic-performance/attainment-v-3', function (req, res) {

    const subject = req.query.subject || '8-best'
    const characteristic = req.query.characteristic || 'all'

    res.render('/prototype-v-1/academic-performance/attainment-v-3', {
        subject,
        characteristic
    })
})
