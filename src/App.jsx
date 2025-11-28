import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import data from './assets/data.json'

function App() {

  let title = data.document.docTitle;
  let personaldetails = data.document.personalDetails;
  let details = {
    corecompetacies: data.document.coreCompetancies,
    professionalsummary: data.document.professionalSummary,
    workexperience: data.document.workExperience,
    education: data.document.education,
    keyachievements: data.document.keyAchievements,
    strengths: data.document.strength
  }
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm'>
        <Header title={title} personaldetails={personaldetails} />
        <hr />
        <Body details={details} />
        <Footer />
      </div>



    </div>
  )
}

export default App
