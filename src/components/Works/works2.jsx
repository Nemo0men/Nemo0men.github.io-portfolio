import ImageCard from "../ui/ImageCard";
import user from "../../assets/mountain.jpg";

export default function Works2() {
    return (
        <main className="Works2">
            <ImageCard imgSrc={user}>
                <h3 className="text-xl font-bold bm-2">Scribble</h3>
                <p>
                    stuff
                </p>
            </ImageCard>
        </main>
    )
}

