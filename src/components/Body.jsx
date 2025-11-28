import React from 'react'

function Body({ details }) {
    return (
        <div>
            <ProfessionalSummary profSummary={details.professionalsummary} />
            <hr />
            <CoreCompetancies coreCompetancies={details.corecompetacies} />
            <hr />
            <WorkExperience workExp={details.workexperience} />
            <hr />
            <Education education={details.education} />
            <hr />
            <Achievements achievements={details.keyachievements} />
            <hr />
            <Strength strength={details.strengths} />
        </div>
    )
}

export default Body

function ProfessionalSummary({ profSummary }) {
    return (
        <div className='col-12 text-wrap'>
            <h5>{profSummary.heading}</h5>
            <p>{profSummary.content}
            </p>
        </div>
    )
}

function CoreCompetancies({ coreCompetancies }) {
    return (
        <div>
            <h5>{coreCompetancies.heading}</h5>
            <ul className='list-unstyled'>
                {coreCompetancies.Competancies.map((item, index) => {
                    return <li key={index} className="bi bi-clipboard2-check-fill"><b> {item.type}:</b> {item.value}</li>
                })

                }
            </ul>

        </div>
    )
}

function WorkExperience({ workExp }) {
    return (
        <div>
            <h5>{workExp.heading}</h5>
            {

                workExp.experiences.map((expreience) => {
                    return (
                        <>
                            <p className='m-0'><b>{expreience.designation}</b></p>
                            <p><i>{expreience.company},{expreience.place}|{expreience.duration}</i></p>
                            <ul className='list-unstyled'>
                                {expreience.keyJobs.map((role, index) => {
                                    return <li key={index}  className="bi bi-clipboard2-check-fill"> {role.items}</li>
                                })}
                            </ul>
                        </>
                    )

                })
            }
        </div>
    )
}

function Education({ education }) {
    return (
        <div>
            <h5>{education.heading}</h5>
            {
                education.educationDetails.map((institute) => {
                    return (
                        <>
                            <p><b>{institute.stream}</b></p>
                            <p>{institute.institute},{institute.place}({institute.passingYear})</p>
                        </>
                    )
                })
            }

        </div>
    )
}

function Achievements({ achievements }) {
    return (
        <div>
            <h5>{achievements.heading}</h5>
            <ul className='list-unstyled'>
                {achievements.achievements.map((item, index) => {
                    return <li key={index}className="bi bi-clipboard2-check-fill"> {item.items}</li>
                })

                }
            </ul>
        </div>
    )
}

function Strength({ strength }) {
    return (
        <div>
            <h5>{strength.heading}</h5>
            <ul className='list-unstyled'>
                {strength.strengths.map((item, index) => {
                    return <li key={index} className="bi bi-clipboard2-check-fill"> {item.items}</li>
                })

                }
            </ul>
        </div>
    )
}