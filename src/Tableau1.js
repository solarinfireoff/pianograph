/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)



        //bg 1 (gris légèrement flou)


        //ground (premier plan noir)
        this.load.image('villanaru','assets/pianog/fond/naruvilla.jpg')
        this.load.image('destville','assets/pianog/fond/desko.jpg')
        this.load.image('naruto1', 'assets/pianog/charac/naruto.png')
        this.load.image('nuaka','assets/pianog/autre/aka1.png')

        this.load.image('sasuke1','assets/pianog/charac/sasuke2.png')



        for(let i = 1; i <= 3; i++) {
            this.load.image('rain' + i, 'assets/level/weather/rain/frame' + i + '.png');
        }
        for(let i=1;i<=3;i++) {
            this.load.image('snow'+i, 'assets/level/weather/snow/fram'+i+'.png');
        }

    }
    getFrames(prefix,length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }
    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create() {

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */


        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        //this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */


        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container = this.add.container(0, 0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */


        //-------------ground (premier plan noir)---------------------------
        this.villanaru = this.add.image(0, 0, 'villanaru').setOrigin(0, 0)
        this.villanaru.scale = 0.5
        this.desko = this.add.image(0,0,'destville').setOrigin(0,0)
        this.desko.scale = 1.2
        this.desko.setVisible(false)
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer = this.add.container(0, 0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions


        this.naruto = this.add.image(0, 0, 'naruto1').setOrigin(-15, -1)
        this.naruto.scale = 0.1
        this.naruto.setVisible(false)


        this.aka1= this.add.image(0, 0, 'nuaka').setOrigin(0, 0)
        this.aka1.setScale= 1

        this.saskue = this.add.image(0, 0, 'sasuke1').setOrigin(- -1)
        this.saskue.scale = 0.2




        //animation de pluie
        this.rain = this.add.sprite(0, 0, 'rain').setOrigin(0, 0);
        this.anims.create({
            key: 'rain',
            frames: this.getFrames("rain", 3),
            frameRate: 16,
            repeat: -1
        });
        this.rain.play('rain')
        this.rain.setVisible(false)

        this.snow = this.add.sprite(0, 0, 'snow ').setOrigin(0,0);
        this.anims.create({
            key: 'snow',
            frames: this.getFrames('snow',3),
            frameRate: 16,
            repeat: -1

        });
        this.snow.play('snow')
        this.snow.visible=false;








        this.initKeyboard();

















        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */

        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */


        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */

    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */

    initKeyboard(){
        let me=this
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    if (me.rain.visible === true) {
                        me.rain.setVisible(false)
                    }
                    else {
                        me.rain.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    if(me.snow.visible === true) {
                       me.snow.setVisible(false)
                    }
                    else {
                       me.snow.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    if(me.naruto.visible ===true) {
                       me.naruto.setVisible(false)
                    }
                    else {
                       me.naruto.setVisible(true)
                        }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    if(me.desko.visible ===true) {
                       me.desko.setVisible(false)
                    }
                    else{
                        me.desko.setVisible(true)
                    }
            }
        });
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {

            }
        });
    }
}