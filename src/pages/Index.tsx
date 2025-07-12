import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy/90 to-motivating/20">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-heading font-bold text-2xl text-white">
            <Icon
              name="Diamond"
              className="inline mr-2 text-energizing"
              size={32}
            />
            EARNING INCOME
          </div>
          <nav className="hidden md:flex space-x-8 text-white/80">
            <a href="#" className="hover:text-energizing transition-colors">
              Главная
            </a>
            <a href="#" className="hover:text-energizing transition-colors">
              О нас
            </a>
            <a href="#" className="hover:text-energizing transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                НАЧНИ
                <span className="block text-energizing">ЗАРАБАТЫВАТЬ</span>
                <span className="block text-motivating">СЕГОДНЯ</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Открой мир безграничных возможностей заработка. Присоединяйся к
                тысячам успешных игроков!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-energizing hover:bg-energizing/90 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  НАЧАТЬ РАБОТАТЬ
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-motivating text-motivating hover:bg-motivating hover:text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-200"
                >
                  <Icon name="Info" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-energizing">
                    500K+
                  </div>
                  <div className="text-sm text-white/60">Активных игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-motivating">₽1M+</div>
                  <div className="text-sm text-white/60">Выплачено сегодня</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">24/7</div>
                  <div className="text-sm text-white/60">Поддержка</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/img/79ef3201-a5ab-401d-b39e-c5a2d41d6928.jpg"
                  alt="Casino Gaming"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-energizing rounded-full p-4 shadow-lg animate-pulse">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-motivating rounded-full p-4 shadow-lg animate-pulse">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="bg-energizing rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Coins" className="text-white" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Быстрые выплаты
              </h3>
              <p className="text-white/70">
                Получай выигрыши мгновенно на любую карту или кошелек
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="bg-motivating rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-white" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Безопасность
              </h3>
              <p className="text-white/70">
                Лицензированная платформа с защитой данных
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="bg-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" className="text-white" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Бонусы
              </h3>
              <p className="text-white/70">
                Щедрые приветственные бонусы для новых игроков
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Готов изменить свою жизнь?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Присоединяйся к тысячам успешных игроков прямо сейчас!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-energizing to-motivating hover:from-energizing/90 hover:to-motivating/90 text-white font-bold py-6 px-12 text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <Icon name="Rocket" className="mr-3" size={24} />
            НАЧАТЬ РАБОТАТЬ СЕЙЧАС
          </Button>
        </div>
      </section>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-energizing/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-motivating/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Index;
