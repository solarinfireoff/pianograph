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
        this.load.image('naruto1', 'assets/pianog/charac/naruto.png')
        this.load.image('nuageaka','assets/pianog/autre/nuage.png')




        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle



        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent


        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

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
        this.bg2Container=this.add.container(0,0);
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
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */


        //-------------ground (premier plan noir)---------------------------
        this.villanaru=this.add.image(0,0, 'villanaru').setOrigin(0,0)
        this.villanaru.scale=0.5
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions







        this.naruto=this.add.image(0,0, 'naruto1').setOrigin(-15,-1)
        this.naruto.scale=0.1


        this.nuage=this.add.image(0,0, 'nuageaka').setOrigin(0,0)
        this.nuage.setScale









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
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:

                    break;
            }
        });
    }
}