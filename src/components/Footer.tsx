import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Icon name="ShoppingBag" className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Магазин</span>
            </div>
            <p className="text-gray-300 mb-4">
              Лучшие товары для вашего дома и семьи. Качество, которому можно
              доверять.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Акции
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Возврат
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">info@shop.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">
                  Москва, ул. Примерная, 123
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Магазин. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
