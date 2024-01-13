export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const item = {
    hidden: { opacity: 0, y: 3 },
    show: { opacity: 1, y: 0, transition: { type: "keyframe" } },
};

export const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
};



export const SecurityContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
};

export const SecurityItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
};

export const navVariants = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: "easeInOut", duration: 0.7, backgroundColor: "red" }, }
};

// Collaboration
export const collabcontainervarients = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const collabitemvarients = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};