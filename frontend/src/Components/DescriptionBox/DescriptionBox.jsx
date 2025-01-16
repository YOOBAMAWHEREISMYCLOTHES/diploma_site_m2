import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Опис</div>
        </div>
      <div className="descriptionbox-description">
        <p>Ми пропонуємо стильний і комфортний одяг, який поєднує якість та сучасний дизайн.
          У наших колекціях використані тільки перевірені матеріали, що забезпечують довговічність 
          та приємні відчуття під час носіння.</p>
             <p>У нашому асортименті знайдуться моделі для будь-якої нагоди: від базового одягу для 
              щоденних образів до яскравих речей для особливих моментів. Оберіть свій 
              ідеальний варіант уже сьогодні!"</p>
      </div>
    </div>
  )
}

export default DescriptionBox;
