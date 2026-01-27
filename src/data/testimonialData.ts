// Testimonial data structure
interface TestimonialDt {
  id: number;
  avatar: string;
  name: string;
  designation: string;
  content: string;
}

// Testimonial data
const testimonialData: TestimonialDt[] = [
  {
    id: 1,
    avatar: "/assets/img/testimonial/avatar.jpg",
    name: "Jeff",
    designation: "Einsteing Digital LLC",
    content:
      "One of the best programmers on Upwork. He did a great job...had great communication. A+++",
  },
  {
    id: 2,
    avatar: "/assets/img/testimonial/avatar-2.jpg",
    name: "Asli",
    designation: "Logicandfacts",
    content:
      "David successfully did the modification to my website that I needed. He was fast and honest.",
  },
  {
    id: 3,
    avatar: "/assets/img/testimonial/avatar-3.jpg",
    name: "Giorgio",
    designation: "Primedrinks AG",
    content:
      "David is very professional and extremely helpful. He completed the job really well. always friendly and patient. He listens and takes feedback and then executes and overdelivers. I will definitely work with him again, hopefully also with more complex projects.",
  },
  {
    id: 4,
    avatar: "/assets/img/testimonial/avatar-3.jpg",
    name: "Patrick",
    designation: "Sipstar AG",
    content: "We like to work with David, he is a very good WP Pro",
  },
  {
    id: 5,
    avatar: "/assets/img/testimonial/avatar-3.jpg",
    name: "Lorenz",
    designation: "Futurecomm AG",
    content:
      "David is the perfect Freelencer that have fixes our Wordpress issues in short time and in excellent Quality! He have also good ideas and his skills are very proffessional! We give him in the future all modifications on our website! Thank you David for your work.",
  },
  {
    id: 6,
    avatar: "/assets/img/testimonial/avatar-3.jpg",
    name: "Samantha",
    designation: "SDiane",
    content:
      "David did a great job. Easy to work with, great communicator, fair & fast. I won't hesitate to work with him again!",
  },
  {
    id: 7,
    avatar: "/assets/img/testimonial/avatar-3.jpg",
    name: "Pavel",
    designation: "Blanc & White Studio",
    content: "Recommended",
  },
  {
    id: 8,
    avatar: "/assets/img/testimonial/avatar-3.jpg",
    name: "David",
    designation: "TechSmidt",
    content:
      "Very hardworking and prompt with delivery within timescales! Good level of skill and work!",
  },
];
export default testimonialData;
