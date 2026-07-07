export type LiffProfile = {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
};

export type LiffContextType = {
    profile: LiffProfile | null;
    isLoggedIn: boolean;
    error: string;
};