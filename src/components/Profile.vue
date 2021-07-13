<template>
  <div id="profile">
    <div class="cover"></div>
    <div class="title"><p class="text-title">ข้อมูลผู้ใช้</p></div>
    <div class="content-container">
      <div class="profile-button">
        <div class="proflie-picture">
          <div class="pic-button">
            <div class="camera-button">
              <img src="../assets/icon/camera.png" />
            </div>
          </div>
        </div>
        <div class="group-button">
          <b-button class="orange-button">แก้ไขข้อมูล</b-button>
          <b-button class="white-button">แก้ไขรหัสผ่าน</b-button>
          <b-button class="white-button">บัญชีธนาคาร & บัตร</b-button>
          <b-button class="white-button">ออกจากระบบ</b-button>
        </div>
      </div>
      <div class="line"></div>
      <div class="infomation">
        <b-form-input
          type="text"
          value="นางสาวจิตใจดี ขอบคุณค่ะ"
        ></b-form-input>
        <b-form-input
          type="tel"
          placeholder="Jitjaidee@email.com"
          disabled
        ></b-form-input>
        <b-form-input type="email" value="012-345-6789"></b-form-input>
        <b-form-input type="text" value="1125468795632"></b-form-input>

        <!-- name -->
        <b-form-group
          label="ชื่อ-นามสกุล"
          label-for="input-1"
        >
          <b-form-input
            type="text"
            placeholder="Enter email"
            value="นางสาวจิตใจดี ขอบคุณค่ะ"
            required
          ></b-form-input>
        </b-form-group>

        <!-- email -->
        <b-form-group
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            type="email"
            placeholder="Enter email"
            value="Jitjaidee@email.com"
            required
            disabled
          ></b-form-input>
        </b-form-group>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>


<style scoped>
.cover {
  width: 100%;
  height: 270px;
  background: url(../assets/cover-profile.png);
}

.title {
  margin-top: 51px;
  margin-left: 111px;
}

.text-title {
  font-size: 30px;
  font-weight: bold;
  line-height: 35px;
  text-align: left;

  color: #1e1d1e;
}

.content-container {
  display: flex;
  margin: 138px;
  margin-top: 71px;
  margin-bottom: 61px;

  padding-top: 34px;
  padding-bottom: 35px;
  padding-left: 84px;
  padding-right: 193px;

  box-shadow: 0px 0px 6px #fca311;
  border-radius: 18px;
}

.profile-button {
  display: block;
}

.proflie-picture {
  width: 204px;
  height: 204px;

  margin: 0 auto;

  border-radius: 50%;
  background-color: gainsboro;
}

.pic-button {
  position: relative;
  top: 150px;
  left: 148px;

  width: 39px;
  height: 39px;

  border: 2px solid #ffffff;
  border-radius: 50%;

  background-color: #fca311;
}

.camera-button {
  position: relative;
  top: 3px;
}

.group-button {
  display: grid;
}

.white-button {
  margin-top: 12px;

  padding: 0;

  width: 234px;
  height: 54px;

  background: #ffffff;
  border: 0;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 18px;
  font-weight: bold;
  color: #1e1d1e;
}

.white-button:hover,
:focus {
  color: #fcc600;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

.orange-button {
  margin-top: 22px;

  padding: 0;

  width: 234px;
  height: 54px;

  background: linear-gradient(180deg, #fca311 0%, #ffd50d 99.99%, #ffd70d 100%);
  border: 0;
  border-radius: 10px;

  font-size: 18px;
  font-weight: bold;
  color: #1e1d1e;
}

.orange-button:hover,
:focus {
  color: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

.line {
  margin-left: 98px;
  margin-right: 164px;

  width: 0px;
  height: 472px;
  border: 1px solid rgba(252, 163, 17, 0.45);
}

.infomation {
  display: block;
}
</style>
