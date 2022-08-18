import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import animeMix from "./images/animeMix.png";
import waves from "./images/waves.png";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="section__welcome">
        <PetsIcon sx={{ mr: 1 }} /> Добро пожаловать!
      </div>
      <div className="section__info">
        Мы - сообщество, направленное на объединение поклонников аниме.
        Присоединяйтесь к нам, когда мы создадим место в Интернете для других
        фанатов, чтобы завести новых друзей, обсудить ваши мысли / любимое аниме
        и начать свою игру / а также приобристи аниме аксесуары.
      </div>
      <img
        src={animeMix}
        alt="mix"
        width={450}
        height={270}
        className="anime__photo"
      />

      <img src={waves} alt="waves" width={"103.8%"} />
      <div className="slider__flip">
        <div className="text__br">ANIME CARD</div>
        <div className="container">
          <img
            src="https://cdn.shoob.gg/images/cards/S/resized/400_b14c680615518b50adcc3f3a94c7caddbea8a5c921476b0e028dc78f27eaa50a.webp"
            alt="elite-class"
            className="canime"
          />
          <img
            src="https://cdn.shoob.gg/images/cards/S/resized/400_9815ad68fff5fa81bc14ae8714428b908891fadb82162ba3516a9fff9f72ebcf.webp"
            alt="albedo"
            className="canime"
          />
          <img
            src="https://cdn.shoob.gg/images/cards/S/resized/400_6b708fef7669eb7a2edd249643544fb00146aff0ebb813beb6491aa8a0f24e7a.webp"
            alt="fofrfo"
            className="canime"
          />
          <img
            src="https://cdn.shoob.gg/images/cards/S/resized/400_8d71d12d0bdc6c5916aa92506379b27801bde585be2af15dfce82f982f05907b.webp"
            alt="ram-ren"
            className="canime"
          />
          <img
            src="https://cdn.shoob.gg/images/cards/S/1593612200233.webp"
            alt="002"
            className="canime"
          />
        </div>
        <div className="br-top">THE BEST ANIME</div>
        <div className="btn">
          <a
            href="https://www.linkedin.com/in/florin-cornea-b5118057/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="first hero">
          <img
            className="hero-profile-img"
            src="https://cdn.wallpapersafari.com/53/13/9Y4U0k.jpg"
            alt=""
          />
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <b>Darling in the Franxx</b>
          </div>
          <div className="hero-date">
            <b>13.01.2018</b>
          </div>
          <div className="hero-btn">
            <button
              className="button-48"
              role="button"
              onClick={() => navigate("/darling-in-the-franxx")}
            >
              <span className="text">Watch</span>
            </button>
          </div>
        </div>

        <div className="second overlord hero">
          <img
            className="hero-profile-img"
            src="https://i0.wp.com/www.kearipan.com/wp-content/uploads/2022/06/overlord-overpower-isekai-anime.jpg"
            alt=""
          />
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <b>Overlord</b>
          </div>
          <div className="hero-date">
            <b>20.02.2019</b>
          </div>
          <div className="hero-btn">
            <button
              className="button-48"
              role="button"
              onClick={() => navigate("/overlord")}
            >
              <span className="text">Watch</span>
            </button>
          </div>
        </div>

        <div className="second akame hero">
          <img
            className="hero-profile-img"
            src="https://justanimehype.com/wp-content/uploads/2021/08/Akame-ga-Kill-Season-2.jpg"
            alt=""
          />
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <b>Akame ga kill</b>
          </div>
          <div className="hero-date">
            <b>20.02.2019</b>
          </div>
          <div className="hero-btn">
            <button
              className="button-48"
              role="button"
              onClick={() => navigate("/akame-ge-kill")}
            >
              <span className="text">Watch</span>
            </button>
          </div>
        </div>

        <div className="second voice hero">
          <img
            className="hero-profile-img"
            src="https://thumbs.dfs.ivi.ru/storage5/contents/c/3/b0e241b230174ec75a85ff8d9ce3bd.jpg"
            alt=""
          />
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <b>Voice form</b>
          </div>
          <div className="hero-date">
            <b>20.02.2019</b>
          </div>
          <div className="hero-btn">
            <button
              className="button-48"
              role="button"
              onClick={() => navigate("/voice-form")}
            >
              <span className="text">Watch</span>
            </button>
          </div>
        </div>

        <div className="second yaiba hero">
          <img
            className="hero-profile-img"
            src="https://cdn.igromania.ru/mnt/news/e/f/b/9/e/c/109146/7e5d35eb069a4107_1920xH.jpg"
            alt=""
          />
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <b>Kimetsu no yaiba</b>
          </div>
          <div className="hero-date">
            <b>20.02.2019</b>
          </div>
          <div className="hero-btn">
            <button
              className="button-48"
              role="button"
              onClick={() => navigate("/kimetsu-no-yaiba")}
            >
              <span className="text">Watch</span>
            </button>
          </div>
        </div>

        <div className="second slime hero">
          <img
            className="hero-profile-img"
            src="https://gen.jut.su/uploads/preview/207/0/2/7_1614193797.jpg"
            alt=""
          />
          <div className="hero-description-bk"></div>
          <div className="hero-description">
            <b>About my rebirth into slime</b>
          </div>
          <div className="hero-date">
            <b>20.02.2019</b>
          </div>
          <div className="hero-btn">
            <button
              className="button-48"
              role="button"
              onClick={() => navigate("/rebirth-slime")}
            >
              <span className="text">Watch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
