import { type User, type InsertUser, type Post, type InsertPost, type Media, type InsertMedia, type Project, type InsertProject, type Message, type InsertMessage, type Subscriber, type InsertSubscriber, type MentorshipRequest, type InsertMentorshipRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Posts
  getAllPosts(): Promise<Post[]>;
  getPost(id: string): Promise<Post | undefined>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  
  // Media
  getAllMedia(): Promise<Media[]>;
  getMedia(id: string): Promise<Media | undefined>;
  createMedia(media: InsertMedia): Promise<Media>;
  
  // Projects
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Messages
  getAllMessages(): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  
  // Subscribers
  getAllSubscribers(): Promise<Subscriber[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Mentorship Requests
  getAllMentorshipRequests(): Promise<MentorshipRequest[]>;
  createMentorshipRequest(request: InsertMentorshipRequest): Promise<MentorshipRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private posts: Map<string, Post>;
  private media: Map<string, Media>;
  private projects: Map<string, Project>;
  private messages: Map<string, Message>;
  private subscribers: Map<string, Subscriber>;
  private mentorshipRequests: Map<string, MentorshipRequest>;

  constructor() {
    this.users = new Map();
    this.posts = new Map();
    this.media = new Map();
    this.projects = new Map();
    this.messages = new Map();
    this.subscribers = new Map();
    this.mentorshipRequests = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample Articles
    const article1: Post = {
      id: "article-1",
      titre: "L'avenir énergétique de l'Afrique : défis et opportunités",
      slug: "avenir-energetique-afrique",
      contenu: "L'Afrique se trouve à un carrefour énergétique crucial. Avec une demande croissante et des ressources abondantes, le continent a l'opportunité unique de construire un système énergétique moderne et durable. Les investissements dans les énergies renouvelables, particulièrement l'énergie solaire et éolienne, peuvent transformer radicalement le paysage énergétique africain tout en créant des millions d'emplois.",
      image_url: "https://images.unsplash.com/photo-1566398364794-5f2e30d3b5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date_publication: new Date("2024-01-15")
    };

    const article2: Post = {
      id: "article-2", 
      titre: "Entrepreneuriat africain : construire l'écosystème de demain",
      slug: "entrepreneuriat-africain-ecosysteme",
      contenu: "Le développement de l'entrepreneuriat en Afrique nécessite un écosystème robuste combinant formation, financement et accompagnement. Les jeunes entrepreneurs africains regorgent de talent et d'innovation. Il est essentiel de créer les conditions favorables à leur épanouissement en développant les infrastructures, en facilitant l'accès au financement et en renforçant les capacités.",
      image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date_publication: new Date("2024-01-10")
    };

    const article3: Post = {
      id: "article-3",
      titre: "Innovation technologique et développement durable en Afrique",
      slug: "innovation-technologique-afrique",
      contenu: "L'innovation technologique est le moteur du développement durable en Afrique. Des solutions digitales aux technologies vertes, le continent peut sauter des étapes et adopter directement les technologies les plus avancées. Cela représente une opportunité exceptionnelle de construire un avenir plus inclusif et respectueux de l'environnement.",
      image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      date_publication: new Date("2024-01-05")
    };

    this.posts.set(article1.id, article1);
    this.posts.set(article2.id, article2);
    this.posts.set(article3.id, article3);

    // Sample Media
    const media1: Media = {
      id: "media-1",
      titre: "Rencontre avec Madame la Première Ministre - Vision énergétique du Togo",
      type: "video",
      lien: "https://www.youtube.com/watch?v=3QL68M3aMeA",
      miniature: "/attached_assets/photos de jonas-2-jonas et Madame la premiere Ministre_1754715375682.png",
      duree: "22:15",
      date_publication: new Date("2024-01-12")
    };

    const media2: Media = {
      id: "media-2",
      titre: "Conférence : L'avenir énergétique de l'Afrique de l'Ouest",
      type: "video",
      lien: "https://www.youtube.com/watch?v=3QL68M3aMeA",
      miniature: "/attached_assets/photos de jonas-5-jonas_1754715375686.png",
      duree: "38:45",
      date_publication: new Date("2024-01-08")
    };

    const media3: Media = {
      id: "media-3",
      titre: "Podcast : Entrepreneuriat et développement en Afrique",
      type: "audio",
      lien: "https://www.youtube.com/watch?v=3QL68M3aMeA",
      miniature: "/attached_assets/photos de jonas-3-jonas a la conference_1754715375684.png",
      duree: "45:20",
      date_publication: new Date("2023-12-15")
    };

    this.media.set(media1.id, media1);
    this.media.set(media2.id, media2);
    this.media.set(media3.id, media3);

    // Sample Projects
    const project1: Project = {
      id: "project-1",
      nom: "Centrale Solaire de Kara",
      description: "Installation d'une centrale solaire photovoltaïque de 50 MW dans la région de Kara, alimentant plus de 100 000 foyers et créant 200 emplois directs. Ce projet pionnier démontre le potentiel du solaire au Togo.",
      pays: "Togo",
      statut: "Réalisé",
      image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      capacite: "50 MW",
      emplois_crees: "200",
      foyers_alimentes: "100 000",
      co2_evite: "45 000 tonnes/an",
      date_mise_service: "Décembre 2023"
    };

    const project2: Project = {
      id: "project-2",
      nom: "Parc Éolien de Dapaong",
      description: "Développement d'un parc éolien de 30 MW dans le nord du Togo, contribuant à la diversification du mix énergétique national et au développement économique de la région.",
      pays: "Togo",
      statut: "En cours",
      image_url: "https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      capacite: "30 MW",
      emplois_crees: "150",
      foyers_alimentes: "60 000",
      co2_evite: "28 000 tonnes/an",
      date_mise_service: "Juin 2024"
    };

    const project3: Project = {
      id: "project-3",
      nom: "Réseau de Mini-grids Ruraux",
      description: "Déploiement de 25 mini-réseaux solaires dans les zones rurales du Burkina Faso, apportant l'électricité à des communautés isolées et stimulant le développement économique local.",
      pays: "Burkina Faso",
      statut: "Planifié",
      image_url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      capacite: "15 MW",
      emplois_crees: "300",
      foyers_alimentes: "25 000",
      co2_evite: "12 000 tonnes/an",
      date_mise_service: "Décembre 2024"
    };

    this.projects.set(project1.id, project1);
    this.projects.set(project2.id, project2);
    this.projects.set(project3.id, project3);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllPosts(): Promise<Post[]> {
    return Array.from(this.posts.values()).sort((a, b) => 
      new Date(b.date_publication).getTime() - new Date(a.date_publication).getTime()
    );
  }

  async getPost(id: string): Promise<Post | undefined> {
    return this.posts.get(id);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return Array.from(this.posts.values()).find(post => post.slug === slug);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = randomUUID();
    const post: Post = { 
      ...insertPost, 
      id,
      image_url: insertPost.image_url || null,
      date_publication: new Date()
    };
    this.posts.set(id, post);
    return post;
  }

  async getAllMedia(): Promise<Media[]> {
    return Array.from(this.media.values()).sort((a, b) => 
      new Date(b.date_publication).getTime() - new Date(a.date_publication).getTime()
    );
  }

  async getMedia(id: string): Promise<Media | undefined> {
    return this.media.get(id);
  }

  async createMedia(insertMedia: InsertMedia): Promise<Media> {
    const id = randomUUID();
    const media: Media = { 
      ...insertMedia, 
      id,
      miniature: insertMedia.miniature || null,
      duree: insertMedia.duree || null,
      date_publication: new Date()
    };
    this.media.set(id, media);
    return media;
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { 
      ...insertProject, 
      id,
      image_url: insertProject.image_url || null,
      capacite: insertProject.capacite || null,
      emplois_crees: insertProject.emplois_crees || null,
      foyers_alimentes: insertProject.foyers_alimentes || null,
      co2_evite: insertProject.co2_evite || null,
      date_mise_service: insertProject.date_mise_service || null
    };
    this.projects.set(id, project);
    return project;
  }

  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messages.values()).sort((a, b) => 
      new Date(b.date_envoi).getTime() - new Date(a.date_envoi).getTime()
    );
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const message: Message = { 
      ...insertMessage, 
      id,
      sujet: insertMessage.sujet || null,
      date_envoi: new Date()
    };
    this.messages.set(id, message);
    return message;
  }

  async getAllSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values()).sort((a, b) => 
      new Date(b.date_inscription).getTime() - new Date(a.date_inscription).getTime()
    );
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = randomUUID();
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id,
      date_inscription: new Date()
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getAllMentorshipRequests(): Promise<MentorshipRequest[]> {
    return Array.from(this.mentorshipRequests.values()).sort((a, b) => 
      new Date(b.date_demande).getTime() - new Date(a.date_demande).getTime()
    );
  }

  async createMentorshipRequest(insertRequest: InsertMentorshipRequest): Promise<MentorshipRequest> {
    const id = randomUUID();
    const request: MentorshipRequest = { 
      ...insertRequest, 
      id,
      date_demande: new Date()
    };
    this.mentorshipRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
