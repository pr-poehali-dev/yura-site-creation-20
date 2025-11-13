import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
              <span className="text-xs font-heading font-bold">S</span>
            </div>
            <span className="text-xl font-heading font-bold">сайтдирект</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-sm hover:text-primary transition-colors">Кейсы</a>
            <a href="#prices" className="text-sm hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Разработка сайтов и рекламы для бизнеса
              </h1>
              <p className="text-lg text-muted-foreground">
                Генерируем поток заявок и звонков от новых клиентов для вашего отдела продаж
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Обсудить проект
                </Button>
                <p className="text-sm text-muted-foreground self-center">
                  расскажите о компании<br/>и поставленных целях
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <img 
                src="https://cdn.poehali.dev/projects/bcbe7240-58cd-4f7b-a6bc-4696189a68aa/files/f744a0d7-f521-4128-9aca-a73c5b024b60.jpg" 
                alt="Специалист" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Что мы умеем делать?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    от {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Сделаем аудит вашего сайта и рекламной кампании
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Низкая конверсия? Трафик с сайта низкого качества? Проведем аудит за 1 день и определим причины.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-0">
              Заказать аудит
            </Button>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши кейсы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <CardHeader>
                  <CardTitle className="font-heading">{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Конверсия</span>
                      <span className="font-semibold text-primary">+{caseItem.conversion}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Трафик</span>
                      <span className="font-semibold text-primary">+{caseItem.traffic}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Цены</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`${plan.featured ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">
                    от {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.featured ? 'default' : 'outline'}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="font-heading text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-4">Обсудить проект</h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-heading font-bold">S</span>
                </div>
                <span className="text-xl font-heading font-bold">сайтдирект</span>
              </div>
              <p className="text-sm opacity-80">Создание сайтов и веб-приложений для бизнеса</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:opacity-100">Разработка сайтов</a></li>
                <li><a href="#services" className="hover:opacity-100">Реклама</a></li>
                <li><a href="#services" className="hover:opacity-100">Аудит</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#cases" className="hover:opacity-100">Кейсы</a></li>
                <li><a href="#prices" className="hover:opacity-100">Цены</a></li>
                <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@saitdirect.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 СайтДирект. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: 'Запуск рекламы на Яндексе',
    price: '60 000 руб',
    icon: <span className="text-2xl">🎯</span>,
    description: 'Соберем ключевые фразы по вашему товару или услуге, настроим рекламные объявления, пройдем модерацию и запустим рекламу.'
  },
  {
    title: 'Запуск рекламы в ВКонтакте',
    price: '60 000 руб',
    icon: <span className="text-2xl">💬</span>,
    description: 'Покажем объявления только необходимой целевой аудитории для максимальной эффективности рекламного бюджета.'
  },
  {
    title: 'Разработка Landing Page',
    price: '170 000 руб',
    icon: <span className="text-2xl">🚀</span>,
    description: 'Делаем лендинги для презентации товаров и услуг. У вас производство? Отлично! С 2018 года работаем с производственными компаниями.'
  },
  {
    title: 'Корпоративный сайт',
    price: '250 000 руб',
    icon: <span className="text-2xl">🏢</span>,
    description: 'Многостраничный сайт для представления вашей компании, услуг и команды. Адаптивная верстка и современный дизайн.'
  },
  {
    title: 'Интернет-магазин',
    price: '400 000 руб',
    icon: <span className="text-2xl">🛒</span>,
    description: 'Полнофункциональный интернет-магазин с каталогом, корзиной, оплатой и интеграцией с системами учета.'
  },
  {
    title: 'Веб-приложение',
    price: '500 000 руб',
    icon: <span className="text-2xl">⚙️</span>,
    description: 'Сложные системы для автоматизации бизнес-процессов, CRM, порталы и другие специализированные решения.'
  }
];

const cases = [
  {
    title: 'Производственная компания',
    industry: 'Производство',
    conversion: 145,
    traffic: 230
  },
  {
    title: 'Медицинский центр',
    industry: 'Медицина',
    conversion: 87,
    traffic: 156
  },
  {
    title: 'Онлайн-школа',
    industry: 'Образование',
    conversion: 210,
    traffic: 340
  }
];

const pricing = [
  {
    name: 'Старт',
    price: '60 000 руб',
    features: [
      'Лендинг до 3 экранов',
      'Адаптивная верстка',
      'Форма обратной связи',
      'Базовая SEO-оптимизация',
      'Срок: 7-10 дней'
    ],
    featured: false
  },
  {
    name: 'Бизнес',
    price: '170 000 руб',
    features: [
      'Лендинг до 7 экранов',
      'Уникальный дизайн',
      'Анимации и эффекты',
      'Интеграция с CRM',
      'Расширенная SEO',
      'Срок: 14-21 день'
    ],
    featured: true
  },
  {
    name: 'Премиум',
    price: '400 000 руб',
    features: [
      'Многостраничный сайт',
      'Премиум дизайн',
      'Личный кабинет',
      'Интеграции с сервисами',
      'Полная SEO',
      'Срок: 30-45 дней'
    ],
    featured: false
  }
];

const faqs = [
  {
    question: 'Какие сроки разработки сайта?',
    answer: 'Сроки зависят от сложности проекта: лендинг — 7-14 дней, корпоративный сайт — 21-30 дней, интернет-магазин — 30-60 дней.'
  },
  {
    question: 'Какая стоимость поддержки сайта?',
    answer: 'Техническая поддержка от 5 000 руб/месяц. Включает обновления, резервное копирование, мелкие правки контента.'
  },
  {
    question: 'Предоставляете ли вы гарантию?',
    answer: 'Да, гарантия 12 месяцев на все работы. Бесплатно исправляем любые баги и технические проблемы.'
  },
  {
    question: 'Можно ли изменить дизайн в процессе?',
    answer: 'Да, до 2 итераций правок дизайна входят в стоимость. Дополнительные изменения оплачиваются отдельно.'
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'Работаем по договору, оплата в 3 этапа: аванс 30%, после утверждения дизайна 40%, после сдачи проекта 30%.'
  }
];

export default Index;
