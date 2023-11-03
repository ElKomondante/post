enum ButtonTypes {
    Primary = "Primary",
    Secondary = "Secondary"
}

interface IButton {
    type: ButtonTypes,
    content: string,
    isActive?: boolean,
    style?: IStyle,
    callback?: () => void
}

interface IStyle {
    [key: string]: string
}

interface IInput {
    title: string,
    type: string,
    [key: string]: any
}

interface IRegistrationActivation {
    uid: string,
    token: string,
}

interface IPostInfo {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    description?: string,
}

enum PostTypes {
    FULL = 'FULL',
    VERTICAL = 'VERTICAL',
    SMALL = 'SMALL',
}

enum Themes {
    DARK = '_DARK',
    LIGHT = '_LIGHT'
}

interface IPost {
    postInfo: IPostInfo,
    type: PostTypes,
    className?: string,
}

interface IPostsState {
    posts: IPostInfo[],
    selectedPost: IPostInfo | null,
    search: string,
}

interface IUiState {
    theme: Themes,
}

interface IUserState {
    user: IUserInfo | null,
}

interface IStoreState {
    posts: IPostsState,
    ui: IUiState,
    user: IUserState,
}

interface IPostsResponse {
    count: number,
    results: IPostInfo[],
}

interface ISignUp {
    username: string,
    email: string,
    password: string,
}

interface ISignIn {
    email: string,
    password: string,
}

interface ITokensResponse {
    refresh: string,
    access: string,
}

interface IUserInfo {
    id: number,
    username: string,
    email: string,
}

interface ICreatePost {
    text: string,
    title: string,
    image: File | undefined,
    lesson_num: number,
    description: string,
}
interface IInputAdd {
    title?: string;
	onChange?: (ev?: any) => void;
	placeholder?: string;
	className?: string;
	maxLength?: number;
	errorMessage?: string;
	type?: string;
    value?: string;
}
interface ISign {
    title: string,
    placeholder?: string,
    isActive?: boolean,
}

interface IUser {
    userName: string;
}

export {
    ButtonTypes,
    type IButton,
    type IInput,
    type IPostInfo,
    type IPost,
    type IPostsState,
    type IStoreState,
    type IUiState,
    type IPostsResponse,
    type IUserState,
    type IRegistrationActivation,
    type ISignUp,
    type ISignIn,
    type ITokensResponse,
    type IUserInfo,
    type ICreatePost,
    type IInputAdd,
    type ISign,
    type IUser,
    PostTypes,
    Themes,
}