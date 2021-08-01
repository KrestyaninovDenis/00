post    /api/signup                регистрация 
post    /api/signin                аутентификация
get     /api/advertisements        поиск объявления для всех
get     /api/advertisements/:id    поиск объявления по ID для всех
post    /api/advertisements        создание объявления, требуется аутентификация
post    /api/advertisements/:id    редактирование объявления только тем кто его создал
post    /api/delete/:id            удаление объявления только тем кто его создал
