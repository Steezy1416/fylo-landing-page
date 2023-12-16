import {
  accessIcon,
  anyFileIcon,
  realTimeIcon,
  securityIcon,
} from "../../images";
import "./iconSection.css";

const IconSection = () => {
  return (
    <section className="icon-section">
      <div className="icon-section-content">
        <div className="feature-icon-container">
          <img className="feature-icon" alt="" src={accessIcon} />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere
          </p>
        </div>
        <div className="feature-icon-container">
          <img className="feature-icon" alt="" src={securityIcon} />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="feature-icon-container">
          <img className="feature-icon" alt="" src={realTimeIcon} />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="feature-icon-container">
          <img className="feature-icon" alt="" src={anyFileIcon} />
          <h2>Store any type of file</h2>
          <p>
            Weather you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconSection;
