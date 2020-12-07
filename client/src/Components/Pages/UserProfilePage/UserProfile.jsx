import React from "react"
import "./UserProfile.css"

const UserProfile = () => {
    return (
        <div className="profile">
            <div className="profile__left">
            <div className="profile__left__image">
            </div>
            <h3>Asem</h3>
                <div>
                    <h3>email.....</h3>
                </div>
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
export default UserProfile