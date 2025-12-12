// 1. Создаем массив JSON с данными для карточек
const cardsData = [
    {
        id: 1,
        title: "Искусственный интеллект в современном мире",
        text: "Искусственный интеллект трансформирует различные отрасли, от медицины до финансов. Узнайте, как ИИ меняет нашу повседневную жизнь.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
        author: {
            name: "Алексей Петров",
            role: "Эксперт по ИИ",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
    },
    {
        id: 2,
        title: "Устойчивое развитие и экологичный образ жизни",
        text: "Как каждый из нас может внести вклад в сохранение планеты через простые ежедневные привычки и осознанное потребление.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop",
        author: {
            name: "Мария Иванова",
            role: "Эколог",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
    },
    {
        id: 3,
        title: "Цифровая трансформация бизнеса",
        text: "Как современные технологии помогают компаниям адаптироваться к быстро меняющимся условиям рынка и повышать эффективность.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
        author: {
            name: "Дмитрий Смирнов",
            role: "Бизнес-консультант",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
    },
    {
        id: 4,
        title: "Психология продуктивности",
        text: "Научно обоснованные методы повышения личной эффективности и управления временем в условиях многозадачности.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop",
        author: {
            name: "Ольга Козлова",
            role: "Психолог",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
    },
    {
        id: 5,
        title: "Будущее удаленной работы",
        text: "Как пандемия изменила подход к организации труда и какие тенденции сохранятся в постковидную эпоху.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop",
        author: {
            name: "Сергей Васильев",
            role: "HR-эксперт",
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
    },
    {
        id: 6,
        title: "Инновации в образовании",
        text: "Технологии виртуальной реальности, геймификация и персонализированное обучение - как меняется современное образование.",
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&h=200&fit=crop",
        author: {
            name: "Екатерина Новикова",
            role: "Педагог-новатор",
            avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&h=100&fit=crop&crop=face",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
        }
    }
];

// 2. Функция для создания одной карточки
function createCard(cardData) {
    // Создаем основной элемент карточки
    const card = document.createElement('div');
    card.className = 'card';

    // Создаем изображение карточки
    const image = document.createElement('img');
    image.className = 'main-image';
    image.src = cardData.image;
    image.alt = cardData.title;
    image.onerror = function() {
        this.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop';
    };

    // Создаем контейнер для текстового содержимого
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';

    // Создаем текстовый блок
    const textBlock = document.createElement('div');
    textBlock.className = 'Text';

    const title = document.createElement('h3');
    title.textContent = cardData.title;

    const text = document.createElement('p');
    text.textContent = cardData.text;

    textBlock.appendChild(title);
    textBlock.appendChild(text);

    // Создаем блок автора
    const authorBlock = document.createElement('div');
    authorBlock.className = 'Author';

    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = cardData.author.avatar;
    avatar.alt = cardData.author.name;
    avatar.onerror = function() {
        this.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face';
    };

    const authorInfo = document.createElement('div');
    authorInfo.className = 'author-info';

    const authorName = document.createElement('h4');
    authorName.textContent = cardData.author.name;

    const authorRole = document.createElement('p');
    authorRole.textContent = cardData.author.role;

    authorInfo.appendChild(authorName);
    authorInfo.appendChild(authorRole);

    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = cardData.author.icon;
    icon.alt = 'Иконка';

    authorBlock.appendChild(avatar);
    authorBlock.appendChild(authorInfo);
    authorBlock.appendChild(icon);

    // Собираем карточку
    contentWrapper.appendChild(textBlock);
    contentWrapper.appendChild(authorBlock);

    card.appendChild(image);
    card.appendChild(contentWrapper);

    return card;
}

// 3. Функция для создания всех карточек и добавления их в контейнер
function renderCards() {
    const container = document.getElementById('cards-container');
    
    if (!container) {
        console.error('Контейнер cards-container не найден!');
        return;
    }

    // Очищаем контейнер перед добавлением новых карточек
    container.innerHTML = '';

    // Создаем и добавляем карточки в контейнер
    cardsData.forEach(cardData => {
        const cardElement = createCard(cardData);
        container.appendChild(cardElement);
    });
}

// Вызываем функцию отрисовки карточек после загрузки DOM
document.addEventListener('DOMContentLoaded', renderCards);

// Альтернативный способ запуска
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCards);
} else {
    renderCards();
}