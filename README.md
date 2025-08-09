# Site Personnel de Jonas Daou

Site web moderne et professionnel présentant Aklesso Jonas Daou, entrepreneur togolais et président du Groupe ZENER.

## 🚀 Fonctionnalités

- **Design Responsive** : Interface adaptée à tous les appareils
- **Lecteur Vidéo Intégré** : Lecture des vidéos directement sur le site
- **Sections Complètes** :
  - Héro avec présentation
  - Biographie détaillée
  - Vision et mission
  - Articles de blog
  - Médias et interventions
  - Projets et réalisations
  - Newsletter
  - Mentorat
  - Contact

## 🛠 Technologies

- **Frontend** : React 18, TypeScript, Tailwind CSS, Wouter
- **Backend** : Node.js, Express, TypeScript
- **Base de données** : PostgreSQL avec Drizzle ORM
- **Build** : Vite
- **UI Components** : Shadcn/ui, Radix UI
- **State Management** : TanStack Query

## 📦 Installation

```bash
# Cloner le repository
git clone [repository-url]
cd jonas-daou-website

# Installer les dépendances
npm install

# Configurer la base de données
npm run db:push

# Démarrer en développement
npm run dev
```

## 🌐 Déploiement

Le projet est optimisé pour Vercel :

```bash
# Build de production
npm run build

# Démarrer en production
npm start
```

### Configuration Vercel

1. Connecter le repository à Vercel
2. Configurer la variable d'environnement `DATABASE_URL`
3. Le déploiement se fait automatiquement

## 📝 Structure du Projet

```
├── client/          # Frontend React
│   ├── src/
│   │   ├── components/  # Composants réutilisables
│   │   ├── pages/       # Pages de l'application
│   │   └── lib/         # Utilitaires et configuration
├── server/          # Backend Express
│   ├── routes.ts    # Routes API
│   ├── storage.ts   # Interface de stockage
│   └── index.ts     # Point d'entrée serveur
├── shared/          # Schémas partagés
├── attached_assets/ # Images et ressources
└── dist/            # Build de production
```

## 🎨 Design

- Palette de couleurs moderne avec bleu primaire (#2563eb)
- Typographie Inter
- Design mobile-first
- Mode sombre/clair
- Animations fluides

## 📱 Responsive

Le site s'adapte parfaitement à :
- Desktop (1024px+)
- Tablet (768px-1023px)
- Mobile (320px-767px)

## 🔧 Scripts Disponibles

- `npm run dev` : Démarrage en mode développement
- `npm run build` : Build de production
- `npm run start` : Démarrage en production
- `npm run check` : Vérification TypeScript
- `npm run db:push` : Synchronisation base de données

## 📄 License

MIT License - Voir le fichier LICENSE pour plus de détails.