import CircularGallery from "./components/CircularGallery";

export default function App() {
  const items = [
    { image: "images/wher4.jpeg", text: "First meeting you" },
    { image: "images/wher1.jpg", text: "At your place" },
    { image: "images/wher2.jpeg", text: "You're so sweet I could kiss you all day" },
    { image: "images/her.jpeg", text: "You're so Gorgeous, I wanna take you on a date rn" },
    { image: "images/solo.jpeg", text: "Cute" },
    { image: "images/wher5.jpg", text: "Photo Booth" },
  ];

  return (
    <div className="h-[600px] relative">
      <CircularGallery
        items={items}
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}
