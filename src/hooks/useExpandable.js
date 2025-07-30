import { useEffect, useState, useRef } from "react";

const useExpandable = () => {
    const [expandedId, setExpandedId] = useState(null);
    const containerRef = useRef();

    const handleToggle = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setExpandedId(null);
            }
        };

        const handleScroll = () => {
            setExpandedId(null);
        };

        document.addEventListener("click", handleOutsideClick);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { expandedId, handleToggle, containerRef };
};

export default useExpandable;
