export type CourseDirectionType = {
    title: string;
    directionName: string;
};

export const coursesDirections: CourseDirectionType[] = [
    {
        title: 'Все программы обучения',
        directionName: 'all'
    },
    {
        title: 'Программирование',
        directionName: 'it'
    },
    {
        title: 'Экономика',
        directionName: 'economic'
    },
    {
        title: 'Менеджмент',
        directionName: 'management'
    },
    {
        title: 'Психология',
        directionName: 'psychology'
    },
    {
        title: 'Иностранные языки',
        directionName: 'foreignLanguage'
    },
    {
        title: 'Дизайн',
        directionName: 'design'
    }
];
