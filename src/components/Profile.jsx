import miffyWithBear from "../assets/imgs/miffyWithBear.png";
const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="img">
          <img src={miffyWithBear} alt="" />
        </div>
      </div>
      {/* profile */}
      <div className="bio added-font">
        <p>
          Welcomeeeee <br /> to my world 😉
        </p>
        <p>Thank you for visiting 💕</p>
        <p>Make sure you explore! move miffy and click all the menus and news</p>
      </div>
      {/* bio */}
    </>
  );
};

export default Profile;
