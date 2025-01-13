import ImageCard from "../ui/ImageCard";
import user from "../../assets/scribble.jpg";
import { Heart, Bookmark, Share } from "lucide-react";

export default function Works2() {
    return (
        <main className="Works2">
            <ImageCard imgSrc={user}>
                <h3 className="text-xl font-bold mb-2">Scribble</h3>
                <p>
                    stuff
                </p>
                <div className="space-x-4 mt-4">
                    <button className="btn">
                        <Heart />
                    </button>
                    <button className="btn">
                        <Bookmark />
                    </button>
                    <button className="btn">
                        <Share />
                    </button>
                </div>
            </ImageCard>
        </main>
    )
}

