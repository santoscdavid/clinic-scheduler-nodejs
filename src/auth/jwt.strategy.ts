// import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
// import { PassportStatic } from 'passport';
// import { Request } from 'express';

// // Substitua por sua chave secreta JWT
// const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';

// // Opções para a estratégia JWT
// const opts: StrategyOptions = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: JWT_SECRET,
//     passReqToCallback: false,
// };

// // Payload esperado do JWT
// interface JwtPayload {
//     id: string;
//     email: string;
//     // outros campos, se necessário
// }

// // Função para configurar a estratégia JWT no Passport
// export function configureJwtStrategy(passport: PassportStatic) {
//     passport.use(
//         new JwtStrategy(opts, async (payload: JwtPayload, done) => {
//             try {
//                 // Aqui você pode buscar o usuário no banco de dados usando o payload.id
//                 // Exemplo fictício:
//                 const user = { id: payload.id, email: payload.email }; // Substitua pela busca real
//                 if (user) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false);
//                 }
//             } catch (error) {
//                 return done(error, false);
//             }
//         })
//     );
// }