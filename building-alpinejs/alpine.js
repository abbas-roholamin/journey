
window.Apline = {
    directives: {
        'x-text': (el, value) => {
            el.innerText = value;
        },
        'x-show': (el, value) => {
            el.style.display = value ? 'block' : "none";
        }
    },

    start() {
        this.root = document.querySelector('[x-data]');
        this.rawData = this.getInitialData();
        this.data = this.observer(this.rawData);
        this.registerEventListers();
        this.refreshDom();
    },

    registerEventListers() {
        this.walk(this.root, el => {
            Array.from(el.attributes).forEach((attr) => {

                if (!attr.name.startsWith('@')) return;

                const event = attr.name.replace('@', '');
                el.addEventListener(event, () => {
                    eval(`with (this.data) {(${attr.value})}`);
                });


            });

        });
    },

    observer(data) {
        const self = this;
        return new Proxy(data, {
            set(target, key, value) {
                target[key] = value;
                self.refreshDom();
            }
        });
    },


    getInitialData() {
        const initialData = this.root.getAttribute('x-data');
        return eval(`(${initialData})`);
    },

    refreshDom() {
        this.walk(this.root, el => {
            Array.from(el.attributes).forEach((attr) => {
                if (!Object.keys(this.directives).includes(attr.name)) return;
                this.directives[attr.name](el, eval(`with (this.data) {(${attr.value})}`));
            });
        });
    },


    walk(el, callback) {
        callback(el);
        el = el.firstElementChild;
        while (el) {
            this.walk(el, callback);
            el = el.nextElementSibling;
        }

    }
};

window.Apline.start()

