import { Component } from '@angular/core';

export class News{ // News class
  id: number;
  votes: number;
  lien: string;
  titre: string;
  contenu: string;
}

const LESNEWS: newsProp[] = [
  { id: 1, votes: 4, lien: 'http://www.lefigaro.fr/flash-actu/2016/06/29/97001-20160629FILWWW00113-brexit-l-ecosse-determinee-a-rester-dans-l-ue.php', titre: 'Brexit', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nostrum consequatur a, accusamus quaerat commodi. Distinctio neque magni, assumenda facere velit eaque, officiis fugiat, delectus laboriosam provident beatae inventore quae. Dignissimos nesciunt quod rem id asperiores impedit possimus placeat laudantium ad omnis accusamus doloribus vero delectus, atque! Impedit, atque perferendis amet, voluptatem dolorum necessitatibus! Veritatis dolores expedita tempore vitae corporis! Numquam nam aperiam consequatur iure alias, quos neque odio culpa quam vel vero cum laudantium deleniti molestias nisi soluta nemo. Maxime eius porro molestiae facilis sequi obcaecati, quisquam nam expedita. '},
  { id: 2, votes: 7, lien: 'http://www.belgianfootball.be/fr/selection-des-diables-rouges', titre: 'Allez les belges', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore accusamus maxime hic dignissimos autem optio, quasi quo corporis nihil iure ipsam quae dicta, in. Quae, praesentium rerum nulla veniam voluptatum. Maxime ipsa, hic facere porro ipsam, quo. Nobis minus nulla aperiam quibusdam magnam atque temporibus, sequi sapiente illo veniam porro tenetur repellendus accusamus aut ullam incidunt officia praesentium, ea amet!Dolorum, ipsum debitis totam obcaecati nihil unde numquam, autem voluptatem possimus labore error omnis voluptates cupiditate accusamus ex id voluptatum rem, repellat quas quasi commodi nulla asperiores fugit sapiente dicta!Deserunt suscipit officiis nesciunt ipsa beatae, consequatur natus nihil sit tenetur ipsam perspiciatis nostrum culpa incidunt, aliquid, optio et numquam est voluptas laudantium. Quam quos qui quaerat perferendis ducimus, unde.' },
  { id: 3, votes: 13, lien: '#', titre: 'Alizée en concert', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quos, expedita maiores nihil quis pariatur unde eum distinctio, quisquam quaerat aliquam sint harum laborum recusandae mollitia officia ratione nobis provident!Modi nobis, quis culpa tempora animi architecto repellat pariatur inventore enim ad repellendus suscipit beatae sed nam voluptatem cum non exercitationem, quae fuga. Necessitatibus, vel, earum. Velit corporis harum architecto.' },
  { id: 4, votes: 6, lien: '#', titre: 'Fusion de cerveaux au STE', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eaque labore, error, harum ex ab culpa quibusdam ratione sit optio perferendis fugiat at, veritatis dolorum. Sed nihil, quidem nisi! Quasi.Nisi excepturi fugit ad harum nobis aut soluta qui, velit. Voluptas eius officia iure dolor est, consectetur in quasi adipisci facere delectus fugit impedit, odit, inventore vero a natus quaerat.Debitis laborum nulla ea repudiandae nisi quidem ut qui quo, obcaecati porro! Ipsam maxime, repellendus tempore sed quam recusandae odio in quo cupiditate! Illum veniam cupiditate saepe laudantium explicabo minus.' },
  { id: 5, votes: 24, lien: '#', titre: 'Spoils GOT pour Denis', contenu: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nam reiciendis sapiente iusto laudantium. Mollitia velit, rerum corporis cum. Quis eos optio voluptate, beatae ut molestiae minus nostrum illum tenetur.Ut atque error itaque accusantium non, laboriosam quo velit, accusamus quasi consequatur ratione rerum assumenda quaerat odit voluptas, nostrum dicta a quisquam quas! Unde delectus dolore, accusamus aperiam eius eveniet!Eligendi sunt vitae a deleniti minus, fugiat nostrum consequuntur, eos veniam maxime sapiente officia odio. Enim eum commodi iusto. Atque, magni dolores nulla sint laborum tenetur, quam officia libero eos. Alias quaerat cumque commodi nostrum harum soluta repudiandae voluptatem dignissimos molestiae optio, sit aliquam vero facere molestias, laudantium ex aperiam ducimus aspernatur unde tempore fugiat minus facilis dicta asperiores eveniet.' }
];

@Component({
  selector: 'my-app',
  templateUrl: 'pageNews.html'
})

export class AppComponent {
  title = 'Adneom News';
  lesnews = LESNEWS;
  selectedNews: News;
  onSelect(news: News) { this.selectedNews = news; }
}