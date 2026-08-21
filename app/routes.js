//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const comparisonUsabilitySchools = [
  {
    id: 'oak-nest',
    name: 'Oak Nest Secondary School',
    address: 'Baltic Campus, Quarryfield Road, Sheffield, S11 8ZG',
    profileUrl: '/user-research/comparison-usability/school-profiles/oak-nest/about-the-school'
  },
  {
    id: 'thomas-lane',
    name: 'Thomas Lane Secondary School',
    address: "St. James' Street, Kingley Park, Sheffield, S10 2QT",
    profileUrl: '/user-research/comparison-usability/school-profiles/thomas-lane/about-the-school'
  },
  {
    id: 'langley-hill',
    name: 'Langley Secondary School',
    address: 'Prince Road, Thistle Hill, Sheffield, S11 7PQ',
    profileUrl: '/user-research/comparison-usability/school-profiles/langley-hill/about-the-school'
  }
]

router.get('/user-research/comparison-usability/my-schools-list', function (request, response) {
  response.render('user-research/comparison-usability/my-schools-list', {
    schools: comparisonUsabilitySchools
  })
})


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


router.post('/add-school', function (req, res) {

  const schoolId = req.body['school-id']
  const returnUrl = req.body['return-url']

  if (schoolId === 'school-1') {
    req.session.data['school-1-name'] = 'Oak Nest Secondary School'
    req.session.data['school-1-address'] =
      'Baltic Campus, Quarryfield Road, Sheffield, S11 8ZG'
  }

  if (schoolId === 'school-2') {
    req.session.data['school-2-name'] = 'Langley Secondary School'
    req.session.data['school-2-address'] =
      'Prince Road, Thistle Hill, Sheffield, S11 7PQ'
  }

  if (schoolId === 'school-3') {
    req.session.data['school-3-name'] = 'Thomas Lane Secondary School'
    req.session.data['school-3-address'] =
      'St. James Street, Kingley Park, Sheffield, S10 2QT'
  }

  res.redirect(returnUrl)

})

router.post('/compare-schools', function (req, res) {

  let selectedSchools = req.body['SelectedEstablishmentUrns']

  if (!Array.isArray(selectedSchools)) {
    selectedSchools = selectedSchools ? [selectedSchools] : []
  }

  req.session.data['selected-schools'] = selectedSchools

  res.redirect('/user-research/comparison-usability/compare-schools')

})

router.get('/user-research/comparison-usability/compare-schools', function (req, res) {

  const selectedIds = req.session.data['selected-schools'] || []

  const selectedSchools = comparisonUsabilitySchools.filter(function (school) {
    return selectedIds.includes(school.id)
  })

  res.render('user-research/comparison-usability/compare-schools', {
    selectedSchools: selectedSchools
  })

})