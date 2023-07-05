function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');

    const tabContent = document.querySelectorAll('.js-tabcontent section');


    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove("ativo");
        });
        tabContent[index].classList.add("ativo");
    }

    // aqui tem um loop para cada item da tela

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}
initTabNav();

function initAccordion() {
    cosnt = accordionList = document.querySelectorAll('.js-accordion dt');

    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAcoordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAcoordion);
        });
    }
}
initAccordion();


