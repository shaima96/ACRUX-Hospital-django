import React from "react"


const DoctorProfile = () => {
    return (
        <div className="profile">
            <div className="profile__left">
                circular image 30%
            </div>
            <div className="profile__right">
                <div className="right__image">
                    circular image 70%
            </div>
                <div className="right__content">
                    <div className="content__left">
                        <div className="content__left__collection">
                            popular collection
                        </div>
                        <div className="content__left__royal">
                            royal ui force
                        </div>

                    </div>
                    <div className="content__right">
                        details
                    </div>
                </div>

            </div>
        </div>
    )


}
export default DoctorProfile