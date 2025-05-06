
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

import './Footer.css';

function Footer (){

    return (
        <>
            <section className="social">
                <a href="https//linkedin.com" target="blank" className="social-link">
                    <LinkedInIcon fontSize='medium'/>
                </a>
                <a href="https//github.com" target="blank" className="social-link">
                    <GitHubIcon fontSize='medium'/>
                </a>
		    </section>

            <section id="copyright">
                <h4>Asier Gonzalez</h4>
                <h4 className="copyright-footer"><CopyrightIcon fontSize='small'/>2025</h4>
		    </section>
        </>
    )
}

export default Footer;