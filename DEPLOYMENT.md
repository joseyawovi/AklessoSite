# Guide de Déploiement Vercel

## Préparation

Le projet est maintenant optimisé et prêt pour le déploiement sur Vercel.

### Fichiers de Configuration

- ✅ `vercel.json` - Configuration Vercel optimisée
- ✅ `api/index.js` - Point d'entrée serverless
- ✅ `.gitignore` - Fichiers à ignorer
- ✅ Build de production testé

### Structure de Déploiement

```
dist/
├── public/          # Frontend statique (servé par Vercel Static)
│   ├── index.html
│   ├── assets/
│   └── images/
└── index.js         # Backend compilé (serverless function)

api/
└── index.js         # Point d'entrée Vercel
```

## Étapes de Déploiement

1. **Connecter le repository à Vercel**
   ```bash
   # Depuis le dashboard Vercel
   # Import Git Repository -> Sélectionner ce repository
   ```

2. **Configurer les variables d'environnement**
   Dans les paramètres Vercel, ajouter :
   ```
   DATABASE_URL=postgresql://...
   NODE_ENV=production
   ```

3. **Déploiement automatique**
   - Le build se lance automatiquement
   - Frontend servé statiquement
   - API comme serverless functions

## Vérifications Pré-déploiement

- ✅ Build réussi : `npm run build`
- ✅ TypeScript OK : `npm run check`
- ✅ Toutes les images optimisées et intégrées
- ✅ Lecteur vidéo fonctionnel
- ✅ Configuration Vercel valide (sans conflits routes/headers)
- ✅ CORS configuré dans le serveur
- ✅ Variables d'environnement documentées

## Post-déploiement

1. Tester toutes les fonctionnalités
2. Vérifier les formulaires de contact
3. Tester le lecteur vidéo intégré
4. Valider la responsive design
5. Confirmer la connexion à la base de données

## Troubleshooting

### Erreurs communes
- **500 Error** : Vérifier DATABASE_URL dans les env vars
- **Build Failed** : Vérifier que toutes les dépendances sont installées
- **Images manquantes** : S'assurer que les assets sont dans le bon répertoire
- **Runtime Error** : Utiliser nodejs18.x au lieu de @vercel/node dans vercel.json

### Logs
- Function logs disponibles dans Vercel Dashboard
- API logs via `console.log` dans les fonctions serverless

Le projet est maintenant prêt pour la production ! 🚀