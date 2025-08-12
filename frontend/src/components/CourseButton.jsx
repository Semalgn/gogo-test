const CourseButton = ({ text, className }) => {
  return (
    <a href="#contact" className={`${className ?? ""} cta-wrapper cursor-pointer`}>
      <div className="cta-course group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default CourseButton;
