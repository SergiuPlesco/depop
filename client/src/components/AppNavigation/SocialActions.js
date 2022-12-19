import InstagramIcon from "../../assets/instagram.png";
import TwitterIcon from "../../assets/twitter.png";
import FacebookIcon from "../../assets/facebook.png";
import TiktokIcon from "../../assets/tiktok.png";

const SocialActions = () => {
	return (
		<>
			<div className="flex justify-start gap-5">
				<a href="" target="_blank" rel="noopener">
					<img src={InstagramIcon} width={18} alt="Instagram icon" />
				</a>
				<a href="" target="_blank" rel="noopener">
					<img src={TwitterIcon} width={18} alt="Twitter icon" />
				</a>
				<a href="" target="_blank" rel="noopener">
					<img src={FacebookIcon} width={18} alt="Facebook icon" />
				</a>
				<a href="" target="_blank" rel="noopener">
					<img src={TiktokIcon} width={18} alt="Tiktok icon" />
				</a>
			</div>
		</>
	);
};

export default SocialActions;
