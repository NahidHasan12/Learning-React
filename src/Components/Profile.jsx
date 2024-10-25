
export default Profile;

function Profile(){
    return (
        <div>
            <h1>Profile Card Manager</h1>
            <ProfileCard
                name = "Nahid Hasan"
                age ={23}
                greeting = {
                    <div>
                        <strong>Hi Nahid Hasan, Have a wonderful day !</strong>
                    </div>
                }
            >
                <p> Hobbies : Reading, Hiking </p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name = "Jhon"
                age ={23}
                greeting = {
                    <div>
                        <strong>Hi Nahid Hasan, Have a wonderful day !</strong>
                    </div>
                }
            >
                <p> Hobbies : Reading, Hiking </p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name = "Rubin Koot"
                age ={23}
                greeting = {
                    <div>
                        <strong>Hi Nahid Hasan, Have a wonderful day !</strong>
                    </div>
                }
            >
                <p> Hobbies : Reading, Hiking </p>
                <button>Contact</button>
            </ProfileCard>
            <ProfileCard
                name = "Nikhil"
                age ={23}
                greeting = {
                    <div>
                        <strong>Hi Nahid Hasan, Have a wonderful day !</strong>
                    </div>
                }
            >
                <p> Hobbies : Reading, Hiking </p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

function ProfileCard({name, age, greeting, children}){
    // const {name, age, greeting, children } = props;
    return (
        <>
            <h2>Name : { name }</h2>
            <p>Age : { age }</p>
            <p>Age : { greeting }</p>
            <div>{ children }</div>
        </>
    );
}