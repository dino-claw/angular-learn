import { Component } from '@angular/core';

@Component({
  selector: 'right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.scss']
})
export class RightCardComponent {
  content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad placeat voluptas distinctio quibusdam? Quam, repudiandae. Deserunt cum reprehenderit est doloribus, expedita harum praesentium non commodi aperiam, repudiandae provident eius odit iste maxime labore quia voluptatibus nihil laudantium architecto quibusdam suscipit sapiente ipsa? Nisi dolore vitae facere at. Maxime, quas impedit.";
  listData = [{
    id: 1,
    title: "ABOUT ME",
    content: ["An experienced engineer with eleven months in software development and software testing. With work on database, and web application. Competence in Java, Python, React, HTML5, JavaScript, MS SQL Server, PostgreSQL, SQLite, scripting in Python/JavaScript/Shell, Docker, and software testing."] as any[]
  }, {
    id: 2,
    title: "Education",
    haveTime: true,
    content: [{
      time: "2018 - 2022",
      subject: "University of science",
      content: [
        "Software Technology", "GPA 3.0"
      ]
    }]
  }, {
    id: 3,
    title: "Experiences",
    haveTime: true,
    content: [{
      time: "1/2022 - now",
      subject: "Enclave",
      content: [
        "Software developer", "- Role: Fullstack. Developed in a team of seven",
        "- Tech: ReactJs, Java, Docker, Kubernetes, BashScript, MS SQL, automation script."
      ]
    }]
  }, {
    id: 4,
    title: "SKILLS",
    content: ["- Technical: Competence in Javascript, NodeJs, ReactJs, Java, Python, C#, HTML5,    Bootstrap, bash script, automation script, Docker, Kubernetes, MS SQL, Mongo DB, MySQL, and software testing...",
      "- English: Intermediate (experience in working with west end client)"]
  }]

  getType(haha: any) {
    return typeof (haha)
  }
}
