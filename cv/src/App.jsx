import Header from "./components/CV/Header";
import Section from "./components/CV/Section";
import SkillList from "./components/CV/SkillList";
import ProjectCard from "./components/CV/ProjectCard";

export default function App() {
  const personalInfo = {
    name: "Nguyễn Việt Tiến",
    title: "Lập trình viên IoT & Web Developer",
    email: "tiennhuyen579n@gmail.com",
    phone: "0896 132 779",
    avatar: "https://via.placeholder.com/120"
  };

  const skillsData = [
    "JavaScript (ReactJS)", 
    "Python (Flask, OpenCV)", 
    "HTML5 / CSS3", 
    "Git / GitHub", 
    "C/C++ (Embedded)"
  ];

  const projectsData = [
    {
      title: "Ứng dụng Chatbot nhận diện khuôn mặt",
      description: "Hệ thống web chatbot kết hợp xác thực khuôn mặt sử dụng Flask, OpenCV và Gemini API.",
      techStack: ["Python", "Flask", "ReactJS", "OpenCV"]
    },
    {
      title: "Mô hình TinyML phát hiện bất thường IoT",
      description: "Xây dựng mô hình AI siêu nhẹ (~824 parameters) xử lý dữ liệu cảm biến cho thiết bị IoT.",
      techStack: ["Python", "StandardScaler", "TinyML"]
    }
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Header {...personalInfo} />

      <Section title="Giới thiệu">
        <p>
          Sinh viên ngành AIoT năng động, yêu thích việc phát triển các ứng dụng kết hợp giữa Web và Trí tuệ nhân tạo.
        </p>
      </Section>

      <Section title="Kỹ năng chuyên môn">
        <SkillList skills={skillsData} />
      </Section>

      <Section title="Dự án cá nhân">
        <ProjectCard projects={projectsData} />
      </Section>
    </div>
  );
}