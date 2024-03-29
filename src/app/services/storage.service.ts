import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public savePostsToStorage(posts: Post[]): void {
    localStorage.setItem('savedPosts', JSON.stringify(posts));
  }
  public loadPosts() {
    let postJson = localStorage.getItem('savedPosts');
    return !postJson
      ? [
          {
            id: 1,
            title: '5 Spännande Teknologier som Förändrar Framtiden',
            thumbnailUrl:
              'https://images.pexels.com/photos/18773225/pexels-photo-18773225/free-photo-of-laptop-keyboard-and-touchpad-on-car-seat.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
            body: 'Teknologin går framåt i en rasande takt, och den påverkar alla aspekter av våra liv. I detta inlägg tittar vi på fem spännande teknologier som har potentialen att förändra framtiden. Från artificiell intelligens till kvantdatorer - vi utforskar de senaste innovationerna som kan forma vår värld. Läs mer om dessa banbrytande teknologier och deras potential att omdefiniera vårt sätt att leva.',
            creationDate: new Date('October 21, 2023 19:25:30'),
            likes: 120,
            dislikes: 8,
            comments: [
              'Spännande inlägg!',
              'Vilken teknologi är du mest entusiastisk över?',
            ],
            tag: 'tech',
          },
          {
            id: 2,
            title: 'Hur 5G Revolutionerar Mobilkommunikationen',
            thumbnailUrl:
              'https://images.pexels.com/photos/6200343/pexels-photo-6200343.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
            body: '5G-teknologin har kommit för att stanna och den revolutionerar mobilkommunikationen. Med snabbare hastigheter och låg latens möjliggör 5G en mängd nya möjligheter, från autonoma fordon till avancerad augmented reality. I detta inlägg undersöker vi hur 5G fungerar, dess fördelar och de spännande användningsområden som öppnas upp. Ta reda på hur den femte generationen av mobilnätet är på väg att förändra hur vi kommunicerar.',
            creationDate: new Date('february 8, 2023 18:25:30'),
            likes: 85,
            dislikes: 3,
            comments: [
              'Fantastiskt inlägg om 5G!',
              'Vilka appar tror du kommer dra nytta av 5G mest?',
            ],
            tag: 'tech',
          },
          {
            id: 3,
            title: 'Säkerhetstips för att Skydda Dina Personuppgifter Online',
            thumbnailUrl:
              'https://images.pexels.com/photos/18693311/pexels-photo-18693311/free-photo-of-city-surveillance-cameras.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
            body: 'I den digitala tidsåldern är säkerheten för dina personuppgifter avgörande. Med ökande hot från cyberbrott är det viktigt att veta hur du kan skydda dina personliga data online. I detta inlägg delar vi några användbara säkerhetstips, inklusive att använda starka lösenord, vara försiktig med e-postbedrägerier och använda tvåfaktorsautentisering. Lär dig hur du kan säkra dina digitala avtryck och minimera risken för att utsättas för dataintrång.',
            creationDate: new Date('January 3, 2023 13:25:30'),
            likes: 95,
            dislikes: 6,
            comments: [
              'Bra tips för online-säkerhet!',
              'Har du några andra råd för att undvika bedrägerier?',
            ],
            tag: 'tech',
          },
          {
            id: 4,
            title: 'Framtidens Transport: Autonoma Fordon',
            thumbnailUrl:
              'https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
            body: 'Autonoma fordon är på väg att förändra sättet vi reser. Med avancerad teknik som självkörande bilar och drönare som levererar paket blir framtidens transport effektivare och säkrare. I detta inlägg utforskar vi de senaste framstegen inom autonoma fordon och deras potential att minska trafikstockningar och olyckor. Upptäck hur dessa fordon kan förändra våra städer och hur vi rör oss.',
            creationDate: new Date('August 19, 2022 23:15:30'),
            likes: 72,
            dislikes: 5,
            comments: [
              'Spännande framtid för transport!',
              'Tror du att du kommer använda en självkörande bil inom de närmaste åren?',
            ],
            tag: 'tech',
          },
          {
            id: 5,
            title: 'Virtual Reality: En Verklighet som inte är Verklighet',
            thumbnailUrl:
              'https://images.pexels.com/photos/7562026/pexels-photo-7562026.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
            body: 'Virtual Reality (VR) har tagit underhållningsvärlden med storm. Med hjälp av VR-hjälmar kan användare dyka in i digitala världar och uppleva äventyr som aldrig förr. I detta inlägg går vi igenom hur VR-teknik fungerar och de olika användningsområdena, från spel och utbildning till medicin. Utforska hur VR förändrar vårt sätt att interagera med digitala innehåll.',
            creationDate: new Date('December 22, 2022 13:25:30'),
            likes: 105,
            dislikes: 7,
            comments: [
              'Fantastiskt inlägg om VR!',
              'Har du någonsin provat en VR-upplevelse?',
            ],
            tag: 'tech',
          },
          {
            id: 6,
            title: 'Blockchain: Framtiden för Säkerhet och Transparens',
            thumbnailUrl:
              'https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
            body: 'Blockchain-tekniken har potentialen att förändra sättet vi hanterar transaktioner och data. Med dess decentraliserade och säkra natur kan blockchain användas inom allt från kryptokurser till röstningssystem. I detta inlägg dyker vi djupare in i blockchain, hur det fungerar och de möjliga fördelarna för samhället. Lär dig hur blockchain-tekniken skapar en ny nivå av transparens och säkerhet.',
            creationDate: new Date('January 3, 2020 02:25:30'),
            likes: 93,
            dislikes: 4,
            comments: [
              'Spännande inlägg om blockchain!',
              'Tror du att blockchain kommer revolutionera finanssektorn?',
            ],
            tag: 'tech',
          },
        ]
      : JSON.parse(postJson);
  }
}
